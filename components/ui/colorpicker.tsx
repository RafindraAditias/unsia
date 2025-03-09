"use client"

import type * as React from "react"
import { useCallback, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface ColorPickerProps {
  color: string
  onChange: (color: string) => void
  className?: string
}

// Utility functions for color conversion
function rgbToHex(r: number, g: number, b: number): string {
  return `#${[r, g, b]
    .map((x) => {
      const hex = x.toString(16)
      return hex.length === 1 ? "0" + hex : hex
    })
    .join("")}`
}

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const r = Number.parseInt(hex.slice(1, 3), 16)
  const g = Number.parseInt(hex.slice(3, 5), 16)
  const b = Number.parseInt(hex.slice(5, 7), 16)
  return { r, g, b }
}

function rgbToHsv(r: number, g: number, b: number) {
  r /= 255
  g /= 255
  b /= 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const d = max - min

  let h = 0
  const s = max === 0 ? 0 : d / max
  const v = max

  if (max !== min) {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }
    h /= 6
  }

  return { h: h * 360, s, v }
}

function hsvToRgb(h: number, s: number, v: number) {
  h /= 360

  let r = 0,
    g = 0,
    b = 0

  const i = Math.floor(h * 6)
  const f = h * 6 - i
  const p = v * (1 - s)
  const q = v * (1 - f * s)
  const t = v * (1 - (1 - f) * s)

  switch (i % 6) {
    case 0:
      r = v
      g = t
      b = p
      break
    case 1:
      r = q
      g = v
      b = p
      break
    case 2:
      r = p
      g = v
      b = t
      break
    case 3:
      r = p
      g = q
      b = v
      break
    case 4:
      r = t
      g = p
      b = v
      break
    case 5:
      r = v
      g = p
      b = q
      break
  }

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  }
}

export function ColorPicker({ color, onChange, className }: ColorPickerProps) {
  const [hsv, setHsv] = useState({ h: 0, s: 0, v: 0 })
  const [rgb, setRgb] = useState({ r: 0, g: 0, b: 0 })
  const [dragging, setDragging] = useState<"hue" | "saturation" | null>(null)
  const [internalColor, setInternalColor] = useState(color)

  const saturationRef = useRef<HTMLDivElement>(null)
  const hueRef = useRef<HTMLDivElement>(null)

  // Initialize HSV and RGB from the color prop only once on mount or when color changes externally
  useEffect(() => {
    if (color !== internalColor && color.startsWith("#")) {
      const rgbValues = hexToRgb(color)
      setRgb(rgbValues)
      setHsv(rgbToHsv(rgbValues.r, rgbValues.g, rgbValues.b))
      setInternalColor(color)
    }
  }, [color, internalColor])

  // Update the color when HSV changes due to user interaction
  const updateColorFromHsv = useCallback(
    (newHsv: { h: number; s: number; v: number }) => {
      const newRgb = hsvToRgb(newHsv.h, newHsv.s, newHsv.v)
      const newHex = rgbToHex(newRgb.r, newRgb.g, newRgb.b)

      setHsv(newHsv)
      setRgb(newRgb)
      setInternalColor(newHex)
      onChange(newHex)
    },
    [onChange],
  )

  // Handle saturation area mouse events
  const handleSaturationMouseDown = useCallback((e: React.MouseEvent) => {
    setDragging("saturation")
    handleSaturationMouseMove(e)
  }, [])

  const handleSaturationMouseMove = useCallback(
    (e: React.MouseEvent | MouseEvent) => {
      if ((dragging === "saturation" || e.type === "mousedown") && saturationRef.current) {
        const rect = saturationRef.current.getBoundingClientRect()
        const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
        const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height))

        updateColorFromHsv({
          h: hsv.h,
          s: x,
          v: 1 - y,
        })
      }
    },
    [dragging, hsv.h, updateColorFromHsv],
  )

  // Handle hue slider mouse events
  const handleHueMouseDown = useCallback((e: React.MouseEvent) => {
    setDragging("hue")
    handleHueMouseMove(e)
  }, [])

  const handleHueMouseMove = useCallback(
    (e: React.MouseEvent | MouseEvent) => {
      if ((dragging === "hue" || e.type === "mousedown") && hueRef.current) {
        const rect = hueRef.current.getBoundingClientRect()
        const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))

        updateColorFromHsv({
          h: x * 360,
          s: hsv.s,
          v: hsv.v,
        })
      }
    },
    [dragging, hsv.s, hsv.v, updateColorFromHsv],
  )

  // Handle mouse up to stop dragging
  const handleMouseUp = useCallback(() => {
    setDragging(null)
  }, [])

  // Add and remove event listeners
  useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", dragging === "saturation" ? handleSaturationMouseMove : handleHueMouseMove)
      window.addEventListener("mouseup", handleMouseUp)
    }

    return () => {
      window.removeEventListener("mousemove", handleSaturationMouseMove)
      window.removeEventListener("mousemove", handleHueMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [dragging, handleSaturationMouseMove, handleHueMouseMove, handleMouseUp])

  // Handle RGB input changes
  const handleRgbChange = (component: "r" | "g" | "b", value: string) => {
    const numValue = Math.max(0, Math.min(255, Number.parseInt(value) || 0))
    const newRgb = { ...rgb, [component]: numValue }
    const newHsv = rgbToHsv(newRgb.r, newRgb.g, newRgb.b)
    const newHex = rgbToHex(newRgb.r, newRgb.g, newRgb.b)

    setRgb(newRgb)
    setHsv(newHsv)
    setInternalColor(newHex)
    onChange(newHex)
  }

  // Calculate positions for the markers
  const saturationMarkerStyle = {
    left: `${hsv.s * 100}%`,
    top: `${(1 - hsv.v) * 100}%`,
  }

  const hueMarkerStyle = {
    left: `${(hsv.h / 360) * 100}%`,
  }

  // Calculate background colors
  const saturationStyle = {
    backgroundColor: `hsl(${hsv.h}, 100%, 50%)`,
  }

  return (
    <div className={cn("w-full space-y-3", className)}>
      {/* Saturation/Value area */}
      <div
        ref={saturationRef}
        className="relative h-40 w-full rounded-md cursor-pointer overflow-hidden"
        style={saturationStyle}
        onMouseDown={handleSaturationMouseDown}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
        <div
          className="absolute w-4 h-4 rounded-full border-2 border-white transform -translate-x-1/2 -translate-y-1/2 shadow-md"
          style={saturationMarkerStyle}
        />
      </div>

      <div className="flex items-center gap-3">
        {/* Color preview */}
        <div
          className="w-10 h-10 rounded-full border border-gray-300 shadow-sm"
          style={{ backgroundColor: internalColor }}
        />

        {/* Hue slider */}
        <div
          ref={hueRef}
          className="relative flex-1 h-6 rounded-md cursor-pointer overflow-hidden"
          style={{
            background: "linear-gradient(to right, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)",
          }}
          onMouseDown={handleHueMouseDown}
        >
          <div
            className="absolute w-4 h-4 rounded-full bg-white border border-gray-300 transform -translate-x-1/2 -translate-y-1/2 top-1/2 shadow-md"
            style={hueMarkerStyle}
          />
        </div>
      </div>

      {/* RGB inputs */}
      <div className="flex gap-2">
        <div className="flex-1">
          <input
            type="number"
            min="0"
            max="255"
            value={rgb.r}
            onChange={(e) => handleRgbChange("r", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md text-center"
          />
          <div className="text-center text-xs mt-1">R</div>
        </div>
        <div className="flex-1">
          <input
            type="number"
            min="0"
            max="255"
            value={rgb.g}
            onChange={(e) => handleRgbChange("g", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md text-center"
          />
          <div className="text-center text-xs mt-1">G</div>
        </div>
        <div className="flex-1">
          <input
            type="number"
            min="0"
            max="255"
            value={rgb.b}
            onChange={(e) => handleRgbChange("b", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md text-center"
          />
          <div className="text-center text-xs mt-1">B</div>
        </div>
      </div>
    </div>
  )
}


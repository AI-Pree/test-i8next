import { createGlobalTheme, createGlobalThemeContract } from '@vanilla-extract/css'
import deepmerge from 'deepmerge'
import { Mode, tokens } from '../app/components/tokens'


import { Tokens } from '../app/components/tokens'

export const breakpoints = {
    xs: 370,
    sm: 576,
    md: 852,
    lg: 968,
    xl: 1080,
    xxl: 1200,
  } as const
  
  export const mediaQueries = {
    xs: ``,
    sm: `@media screen and (min-width: ${breakpoints.sm}px)`,
    md: `@media screen and (min-width: ${breakpoints.md}px)`,
    lg: `@media screen and (min-width: ${breakpoints.lg}px)`,
    xl: `@media screen and (min-width: ${breakpoints.xl}px)`,
    xxl: `@media screen and (min-width: ${breakpoints.xxl}px)`,
  }
  
  export type Breakpoint = keyof typeof breakpoints
  
  export const breakpointNames = Object.keys(breakpoints) as Breakpoint[]
  

export type Theme = {
    colors: Tokens['colors']
    fonts: Tokens['fonts']
    borderWidths: Tokens['borderWidths']
    radii: Tokens['radii']
    space: Tokens['space']
    fontSizes: Tokens['fontSizes']
    shadows: Tokens['shadows']
}


const getVarName = (_value: string | null, path: string[]) => path.join('-')

const baseTokens: Omit<Theme, 'colors'> = tokens
const baseVars = createGlobalThemeContract(baseTokens, getVarName)
createGlobalTheme(':root', baseVars, baseTokens)

const makeColorScheme = (mode: Mode = 'light') => {
    const colors = tokens.colors[mode]

    return {
        colors,
    }
}

const modeTokens = makeColorScheme('light')
export const modeVars = createGlobalThemeContract(modeTokens, getVarName)
createGlobalTheme('[data-theme="light"]', modeVars, modeTokens)
createGlobalTheme('[data-theme="dark"]', modeVars, makeColorScheme('dark'))

type BaseVars = typeof baseVars
type ModeVars = typeof modeVars
type Vars = BaseVars & ModeVars
export const vars = deepmerge(baseVars, modeVars) as Vars

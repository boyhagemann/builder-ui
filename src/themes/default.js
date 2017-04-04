import Color from 'color'

export const variables = {
  color: {
    canvas: "#f9f8f7",
    primary: "#1E88E5",
    blank: "#fff",
    dark: "#444",
    negative: "#e44",
  }
}

export default {
  width: 1200,
  font: {
    size: {
      tiny: 10,
      small: 13,
      'default': 16,
      large: 25,
      huge: 40,
    },
    family: {
      'default': '"Trebuchet MS", Helvetica, sans-serif',
    }
  },
  color: {
    canvas: {
      'default': variables.color.canvas,
      highlight: Color(variables.color.canvas).lighten(0.2).string(),
      offset: Color(variables.color.canvas).darken(0.03).string(),
      faded: Color(variables.color.canvas).darken(0.5).string(),
      text: Color(variables.color.canvas).darken(0.6).string()
    },
    primary: {
      'default': variables.color.primary,
      highlight: Color(variables.color.primary).lighten(0.2).string(),
      faded: Color(variables.color.primary).lighten(0.5).string(),
      text: variables.color.blank
    },
    negative: {
      'default': variables.color.negative,
      highlight: Color(variables.color.negative).lighten(0.2).string(),
      faded: Color(variables.color.negative).lighten(0.5).string(),
      text: variables.color.blank
    },
    neutral: {
      'default': Color(variables.color.canvas).darken(0.03).string(),
      highlight: Color(variables.color.canvas).darken(0.1).string(),
      strong: Color(variables.color.canvas).darken(0.3).string(),
      text: Color(variables.color.canvas).darken(0.6).string(),
    },
    offset: {
      'default': Color(variables.color.canvas).darken(0.2).string(),
      highlight: Color(variables.color.canvas).darken(0.22).string(),
      strong: Color(variables.color.canvas).darken(0.6).string(),
      text: Color(variables.color.canvas).darken(0.6).string(),
    }
  },
  spacing: {
    huge: 48,
    large: 24,
    'default': 16,
    small: 8,
    tiny: 2
  }
}

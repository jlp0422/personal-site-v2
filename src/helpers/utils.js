export const linkExists = ({ link, text }) => Boolean(link && text)

export const upper = str => str.toUpperCase()

export const lower = str => str.toLowerCase()

export const joinAndLower = (str, splitOn = ' ') =>
  lower(str.split(splitOn).join(''))

export const isSvg = extension => extension === 'svg'

export const isGif = extension => extension === 'gif'

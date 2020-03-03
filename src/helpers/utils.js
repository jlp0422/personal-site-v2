export const linkExists = ({ link, text }) => Boolean(link && text)

export const joinString = str =>
  str
    .split(' ')
    .join('')
    .toLowerCase()

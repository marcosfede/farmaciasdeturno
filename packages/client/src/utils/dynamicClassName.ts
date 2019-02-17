export default function dynamicClassName(object) {
  return Object.entries(object)
    .reduce((acc, [key, value]) => (!!value ? acc.concat(key) : acc), [] as string[])
    .join(' ')
}

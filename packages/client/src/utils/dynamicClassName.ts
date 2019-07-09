export function dynamicClassName(dynamicClasses: { [x: string]: boolean }, staticClasses: string = ''): string {
  const extra =
    staticClasses.split(' ').length > 0 ? staticClasses.split(' ').map((cls): [string, boolean] => [cls, true]) : []
  return Object.entries(dynamicClasses)
    .concat(extra)
    .reduce((acc, [key, value]) => (!!value ? acc.concat(key) : acc), [] as string[])
    .join(' ')
}

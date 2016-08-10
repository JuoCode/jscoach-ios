export interface JSCoachDataItem {
  name: string,
  description: string,
  readme: string
}

export interface JSCoachData {
  packages: Array<JSCoachDataItem>
}
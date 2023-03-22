export class Fish {
  id: number
  name: string
  category: number
  price: number
  unit: string
  availability: boolean
  sale: boolean
  discount: number
  comments: string
  owner: string
  static id: (
    this: void,
    value: never,
    index: number,
    obj: never[]
  ) => value is never
  constructor(
    id: number,
    name: string,
    category: number,
    price: number,
    unit: string,
    availability: boolean,
    sale: boolean,
    discount: number,
    comments: string,
    owner: string
  ) {
    this.id = id
    this.name = name
    this.category = category
    this.price = price
    this.unit = unit
    this.availability = availability
    this.sale = sale
    this.discount = discount
    this.comments = comments
    this.owner = owner
  }
}

export interface IProduct {
  _id?: string
  title: string
  description: string
  price: number
  imagePath: string
  createdAt?: string | Date
  updatedAt?: string | Date
}

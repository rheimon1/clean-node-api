import { Collection, MongoClient } from 'mongodb'

export const MongoHelper = {
  client: null,

  async connect (uri: string): Promise<void> {
    this.client = new MongoClient(uri)
    await this.client.connect()
  },

  async disconnect (): Promise<void> {
    await this.client.close()
  },

  getCollection (name: string): Collection {
    return this.client.db().collection(name)
  },

  map (account: any): any {
    const { _id, ...accountWithoutId } = account
    return Object.assign({}, accountWithoutId, { id: String(_id) })
  }
}

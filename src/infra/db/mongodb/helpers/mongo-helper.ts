import { Collection, MongoClient } from 'mongodb'

export const MongoHelper = {
  client: null,
  uri: null,

  async connect (uri: string): Promise<void> {
    this.uri = uri
    this.client = new MongoClient(uri)
    await this.client.connect()
  },

  async disconnect (): Promise<void> {
    await this.client.close()
    this.client = null
  },

  isConnected () {
    return !!this.client && !!this.client.topology && this.client.topology.isConnected()
  },

  async getCollection (name: string): Promise<Collection> {
    if (!this.isConnected()) {
      await this.connect(this.uri)
    }
    return this.client.db().collection(name)
  },

  map (account: any): any {
    const { id, ...accountWithoutId } = account
    return Object.assign({}, accountWithoutId, { id })
  }
}

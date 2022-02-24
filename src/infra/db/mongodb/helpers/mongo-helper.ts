import { MongoClient } from 'mongodb'

export const MongoHelper = {
  client: null,

  async connect (uri: string): Promise<void> {
    this.client = new MongoClient(process.env.MONGO_URL ?? '')
    await this.client.connect()
  },

  async disconnect (): Promise<void> {
    await this.client.close()
  }
}

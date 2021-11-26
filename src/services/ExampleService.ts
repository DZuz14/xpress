import ExampleManager from '../managers/ExampleManager'

export default class ExampleService {
  static async getExample() {
    return await ExampleManager.getExample()
  }
}

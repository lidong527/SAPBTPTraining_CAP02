import cds from '@sap/cds'

export default class CatalogService extends cds.ApplicationService {

  async init() {

    this.on('hello', async () => {
      return 'Hello CAP TypeScript'
    })

    return super.init()
  }
}
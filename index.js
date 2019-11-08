class BOLTTRUST {
  constructor() {
    
  }

  login({ account, password }) {
    return Promise.resolve();
  }

  listCertification() {
    return Promise.resolve({
      
    });
  }

  readCertification({ id }) {
    return Promise.resolve({
    
    });
  }

  createTemplate({ data }) {
    return Promise.resolve({
      id: ''
    });
  }

  readTemplate({ id }) {
    return Promise.resolve({
      data: {}
    });
  }

  createCertification({ data }) {
    return Promise.resolve({
      id: ''
    })
  }

  batchCreateCertification({ dataArray }) {
    return Promise.resolve({
      
    })
  }
}

module.exports = BOLTTRUST;
// googleCloudService.js

const { LanguageServiceClient } = require('@google-cloud/language');
const logger = require('../utils/logger');

const googleCloudService = {
  analyzeContent: async (content) => {
    try {
      const client = new LanguageServiceClient();
      const document = {
        content: content,
        type: 'PLAIN_TEXT',
      };
      const [result] = await client.analyzeContent({ document: document });
      const entities = result.entities;
      return entities;
    } catch (error) {
      logger.error(`Error analyzing content: ${error}`);
      return null;
    }
  },
};

module.exports = googleCloudService;
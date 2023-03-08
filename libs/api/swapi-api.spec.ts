import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { swapiInstance } from './swapi-api';

describe('swapi-api', () => {
  let apiMock: MockAdapter;
  let axiosMock: MockAdapter;

  beforeEach(() => {
    apiMock = new MockAdapter(swapiInstance);
    axiosMock = new MockAdapter(axios);
  });

  afterEach(() => {
    apiMock.restore();
    axiosMock.restore();
  });

  const mockEndpoint = () => apiMock.onGet('/mock-endpoint');
  const callSwapiEndpoint = () => swapiInstance.get('/mock-endpoint');

  describe('response', () => {
    it('should return data', async () => {
      const data = { foo: 'bar' };
      mockEndpoint().reply(200, data);
      const response = await callSwapiEndpoint();
      expect(response.data).toEqual(data);
    });

    it('should return status', async () => {
      const status = 200;
      mockEndpoint().reply(status);
      const response = await callSwapiEndpoint();
      expect(response.status).toEqual(status);
    });

    it('should return config', async () => {
      const configUrl = '/mock-endpoint';
      mockEndpoint().reply(200);
      const { config } = await callSwapiEndpoint();
      expect(config.url).toEqual(configUrl);
    });
  });
});

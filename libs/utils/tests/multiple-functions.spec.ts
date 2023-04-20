import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { downloadImage, selectRandom, saveJson } from '../multiple-fuctions';
import fs from 'fs';
import { waitFor, renderHook } from '@testing-library/react';
import { TypesSwapi } from '@models';

describe('multiple-functions', () => {
  describe('Download image', () => {
    it('should download an image', async () => {
      // Set up mock for axios
      const mock = new MockAdapter(axios);
      const image = fs.createReadStream('libs/utils/multiple-fuctions.ts');
      mock.onGet('https://example.com/image.png').reply(200, image);

      // Call the function to download the image
      const path = 'libs/utils/tests/test.png';
      await downloadImage('https://example.com/image.png', path);

      // Check that the file was created and has content
      await waitFor(() => {
        const stats = fs.statSync(path);
        expect(stats.isFile()).toBe(true);
        expect(stats.size).toBeGreaterThanOrEqual(0);
      });

      // Clean up the file created during the test
      fs.promises.unlink(path);
    });
  });

  describe('Select Random', () => {
    it('should return random user agent', () => {
      const { result } = renderHook(() => selectRandom());
      expect(result.current).toEqual(expect.any(String));
    });
  });

  describe('Save Json', () => {
    const filePath = 'libs/mocks/swapi-data/test.json';
    const newData = [{ id: 1, name: 'Luke Skywalker' }];
    let existingData: any[];

    beforeAll(() => {
      if (fs.existsSync(filePath)) {
        existingData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      } else {
        existingData = [];
      }
    });

    afterEach(() => {
      // Clean up the file created during the test
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    });

    it('should save new data to the JSON file when the file already exists', () => {
      // Save the new data to the JSON file
      saveJson(newData, 'test' as TypesSwapi);

      // Verify that the file was created and has content
      expect(fs.existsSync(filePath)).toBe(true);
      const stats = fs.statSync(filePath);
      expect(stats.isFile()).toBe(true);
      expect(stats.size).toBeGreaterThan(0);

      // Verify that the new data was added to the file
      const updatedData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      expect(updatedData).toHaveLength(existingData.length + 1);
      expect(updatedData).toEqual([...existingData, ...newData]);

      // Save the new data to the JSON file
      saveJson(newData, 'test' as TypesSwapi);
      expect(fs.existsSync(filePath)).toBe(true);
      const statsTwo = fs.statSync(filePath);
      expect(statsTwo.isFile()).toBe(true);
      expect(statsTwo.size).toBeGreaterThan(0);

      // Verify that the new data was added to the file
      const updatedDataTwo = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      expect(updatedDataTwo).toHaveLength(existingData.length + 2);
      expect(updatedDataTwo).toEqual([...existingData, ...newData, ...newData]);
    });
  });
});

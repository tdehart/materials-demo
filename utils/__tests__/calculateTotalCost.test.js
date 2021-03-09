import calculateTotalCost from '../calculateTotalCost';
import { materials } from '../data';

const material = {
  name: "Sand",
  cost: "25.5",
  volume: "5000",
}

describe('calculateTotalCost', () => {
  it('should return 0 if cost is not a number', () => {
    const cost = calculateTotalCost({
      ...material,
      cost: 'Foo'
    });
    expect(cost).toEqual(0);
  });

  it('should return 0 if volume is not a number', () => {
    const cost = calculateTotalCost({
      ...material,
      volume: 'Foo'
    });
    expect(cost).toEqual(0);
  });

  it('should return cost', () => {
    const cost = calculateTotalCost(material);
    expect(cost).toEqual(material.cost * material.volume);
  });
});
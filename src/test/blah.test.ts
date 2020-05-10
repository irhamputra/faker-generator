import { fakerGenerator } from '../index';

describe('blah', () => {
  it('works', () => {
    const schema = {
      id: "{{random.uuid}}",
      name: "{{name.firstName}} {{name.lastName}}",
      address: "{{address.cityPrefix}} {{address.citySuffix}}",
      state: "{{address.state}}",
      phone: "{{phone.phoneNumber}}",
      imageUrl: "{{image.people}}",
      email: "{{internet.email}}",
    };

    const generate = fakerGenerator(schema, 20, 20)

    expect(generate).toHaveLength(20);
    expect(generate).toBeCalledTimes(1);

    // write another test
  });
});

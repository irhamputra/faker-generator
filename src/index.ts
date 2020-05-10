import faker from 'faker'

const fakerGenerator = (schema: object | any, min = 1, max: number) => {
    max = max || min;
    return Array.from({ length: faker.random.number({ min, max }) }).map(() =>
        Object.keys(schema).reduce((entity: object| any, key) => {
            entity[key] = faker.fake(schema[key]);
            return entity;
        }, {})
    );
};

export default fakerGenerator

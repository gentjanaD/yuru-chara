

describe('Test the addLike method', () => {
    beforeAll(async () => {
        const url = `mongodb://127.0.0.1/mascots`;
        await mongoose.connect(url, { useNewUrlParser: true });
      });

//       afterAll(async () => {
//         await dropAllCollections();
//         await mongoose.connection.close();
//       });
});
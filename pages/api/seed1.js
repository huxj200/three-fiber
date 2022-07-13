import Models from '../../models/Models';
import data from '../../utils/data';
import db from '../../utils/db';

const handler = async (req, res) => {
    await db.connect();
    await Models.deleteMany();
    await Models.insertMany(data.data);
    await db.disconnect();
    res.send({ message: 'seeded successfully' });
};
export default handler;
const { TipoPapel, Medida, Gramaje } = require('../../db.js');

const preloaderProduct = async (producto) => {
    try {
        const productCreated = await TipoPapel.create(producto);
        try {
            await Medida.findOrCreate({
                    where: { medida: producto.medida }
                });
            }
            catch (err) {
                console.log(err);
            }

        const categoryCreated = await Medida.findOne({ where: { medida: producto.medida } });
        await categoryCreated.addProduct(productCreated);
    }
    catch (error) {
        console.log(error);
    }
};

module.exports = preloaderProduct;

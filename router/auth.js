const {Router,response}=require('express');
const {check}=require('express-validator');
const Venta= require('../modelo/venta');
const router = Router();

router.post('/create',async (req, res = response) =>{
    try {
            const venta = new Venta(req.body);
            await venta.save();
            res.json({
                response:"ok",
                message: 'producto registrado correctamente'

            });
        } catch (error) {
            res.json({
                ok:false,
                menssage:'Ocurrio un error inesperado'
            });
        }
});
router.get('/',async (req, res = response) => {
    try {
    const ventas = await Venta
    .find()
    .limit(10)


    res.json({
        response:" ok",
        ventas,
        menssage:" producto encontrado"
    });
} catch (error) {
    res.json({
        ok:false,
        menssage:' Ocurrio un error inesperado'
    });
}
    
});

module.exports=router
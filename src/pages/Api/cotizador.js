v// src/pages/api/cotizar.js
export const POST = async ({ request }) => {
    try {
        const data = await request.json();
        const { tipo, largo, alto, factor } = data;

        // Aquí jalas los precios de tu base de datos (Supabase) según la empresa que esté logueada.
        // Por ahora usamos los default de prueba.
        const cfg = { riel: 50, jamba: 50, zoclo: 50, cercoFijo: 50, traslape: 50, cercoChapa: 50, mosquitero: 50, vidrio: 50, herrajes: 5 };
        
        let costoTotal = 0;

        // TUS FÓRMULAS SECRETAS - Nadie en el frontend puede ver esto
        if (tipo === 'v2') {
            costoTotal += (largo / 6.1) * cfg.riel;
            costoTotal += ((largo + alto + largo) / 6.1) * cfg.jamba;
            costoTotal += ((largo * 4) / 6) * cfg.zoclo;
            costoTotal += (alto / 6.1) * cfg.cercoFijo;
            costoTotal += ((alto * 2) / 6.1) * cfg.traslape;
            costoTotal += (largo / 6.1) * cfg.cercoChapa;
            costoTotal += (6.1 / 3.6) * cfg.mosquitero;
            costoTotal += ((largo * alto) / 4.68) * cfg.vidrio;
            costoTotal += cfg.herrajes;
        } else if (tipo === 'pta3') {
            costoTotal += (largo / 6.1) * cfg.riel;
            costoTotal += ((largo + alto + largo) / 6.1) * cfg.jamba;
            costoTotal += ((largo * 4) / 6) * cfg.zoclo;
            costoTotal += (alto / 6.1) * cfg.cercoFijo;
            costoTotal += ((alto * 2) / 6.1) * cfg.traslape;
            costoTotal += (largo / 6.1) * cfg.cercoChapa;
            costoTotal += ((largo * alto) / 4.68) * cfg.vidrio;
            costoTotal += cfg.herrajes; 
        }

        const precioVenta = costoTotal * factor;

        return new Response(JSON.stringify({
            success: true,
            costoReal: costoTotal,
            precioVenta: precioVenta
        }), { status: 200 });

    } catch (error) {
        return new Response(JSON.stringify({ success: false, message: 'Error al cotizar' }), { status: 500 });
    }
}
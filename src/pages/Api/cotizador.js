import { supabase } from '../../lib/supabase';

export const prerender = false; // Asegura que esto corra en el servidor

export const POST = async ({ request }) => {
    try {
        const data = await request.json();
        const { cliente, tipo, cantidad, largo, alto, factor } = data;

        // Fórmulas de cálculo (Ocultas del frontend)
        const cfg = { riel: 50, jamba: 50, zoclo: 50, cercoFijo: 50, traslape: 50, cercoChapa: 50, mosquitero: 50, vidrio: 50, herrajes: 5 };
        let costoTotal = 0;

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
        const totalConCantidad = precioVenta * cantidad;

        // Guardar en Supabase
        // Nota: Ahorita no le pasamos empresa_id ni vendedor_id porque aún no armamos el login,
        // pero guardamos el resto de los datos en la tabla 'cotizaciones'
        const { error } = await supabase
            .from('cotizaciones')
            .insert([
                {
                    cliente_nombre: cliente,
                    total: totalConCantidad,
                    detalles_json: {
                        tipo: tipo,
                        cantidad: cantidad,
                        largo: largo,
                        alto: alto,
                        factor_aplicado: factor
                    }
                }
            ]);

        if (error) throw error;

        return new Response(JSON.stringify({
            success: true,
            costoReal: costoTotal * cantidad,
            precioVenta: totalConCantidad
        }), { 
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error("Error en API:", error);
        return new Response(JSON.stringify({ success: false, message: 'Error al cotizar' }), { 
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
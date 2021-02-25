/*var passwd;
passwd=prompt("Ingrese la contraseña para acceder")
while(passwd!="control4970"){
	passwd=prompt("Contraseña errónea: Ingrese la contraseña para acceder")
}*/

function calcularSueldo()
{
	// Declaracion de variables ingresadas por usuario
	var categoriaIngresada;
	var antiguedadIngresada;
	var aCuentaBlancoIngresado;
	var aCuentaNegroIngresado;
	var horasExtraIngresadas;
	var horasFeriadoIngresadas;
	var licenciaPagaIngresadas;
	var licenciaNoPagaIngresadas;

	// Declaracion de variables adicionales
	var diasAusente;
	var sueldoBasico;
	var presentismoBase;
	var montoDescuentoPresentismo;
	var descuentoPresentismo;
	var presentismo;
	var antiguedad;
	var antiguedadBase;
	var horasExtraBase;
	var horasExtra;
	var horasFeriadoBase;
	var horasFeriado;
	var basicoMasPresentismo;
	var viaticos;
	var anticipoIngresado;
	var totalBruto;
	var totalNeto;
	var totalEnMano;
	var viaticosBase=7000;
	var sueldoBasicoMonitoreo=38508;
	var presentismoMonitoreo=3080;

	// Toma de datos
	categoriaIngresada=document.getElementById('selectCategoria').value;
	antiguedadIngresada=document.getElementById('selectAntiguedad').value;
	aCuentaBlancoIngresado=parseInt(document.getElementById('txtIdACuentaRecibo').value);
	aCuentaNegroIngresado=parseInt(document.getElementById('txtIdACuentaSobre').value);
	horasExtraIngresadas=parseInt(document.getElementById('txtIdHorasExtra').value);
	horasFeriadoIngresadas=parseInt(document.getElementById('txtIdHorasFeriado').value);
	licenciaPagaIngresadas=parseInt(document.getElementById('txtIdLicenciaPaga').value);
	licenciaNoPagaIngresadas=parseInt(document.getElementById('txtIdLicenciaNoPaga').value);
	anticipoIngresado=parseInt(document.getElementById('txtIdAnticipo').value);

	// Calculo de sueldo basico y presentismo base
	switch(categoriaIngresada){
		case "monitoreo":
			sueldoBasico=sueldoBasicoMonitoreo;
			presentismoBase=presentismoMonitoreo;
			break;
	}
	
	// Calculo presentismo
	switch(licenciaPagaIngresadas){
		case 0:
		case 1:
			descuentoPresentismo=0;
			break;
		case 2:
			descuentoPresentismo=10;
			break;
		case 3:
			descuentoPresentismo=20;
			break;
		default:
			descuentoPresentismo=30;
			break;
	}
	if(licenciaNoPagaIngresadas>0){
		descuentoPresentismo=100;
	}
	montoDescuentoPresentismo=presentismoBase*descuentoPresentismo/100;
	presentismo=presentismoBase-montoDescuentoPresentismo;

	// Calculo suma basico y presentismo
	basicoMasPresentismo=sueldoBasico+presentismo;

	// Calculo de antiguedad
	antiguedadBase=basicoMasPresentismo*.01
	antiguedad=antiguedadIngresada*antiguedadBase;

	// Horas extras
	horasExtraBase=(basicoMasPresentismo+antiguedad)*.0075;
	horasExtra=horasExtraIngresadas*horasExtraBase;

	// Horas feriado
	horasFeriadoBase=(basicoMasPresentismo+antiguedad)*.005;
	horasFeriado=horasFeriadoIngresadas*horasFeriadoBase;

	// Viaticos
	diasAusente=licenciaPagaIngresadas+licenciaNoPagaIngresadas;
	if(diasAusente>25){
		viaticos=0;
	}
	else{
		viaticos=viaticosBase-(viaticosBase*diasAusente/25);
	}

	// Calculos totales
	totalBruto=basicoMasPresentismo+aCuentaBlancoIngresado+antiguedad+horasFeriado+horasExtra-anticipoIngresado;
	totalNeto=totalBruto*.83+viaticos;
	totalEnMano=totalNeto+aCuentaNegroIngresado

	// Muestro resultados
	document.getElementById('txtIdMontoSueldoBasico').value=sueldoBasico.toFixed(2);
	document.getElementById('txtIdMontoPresentismo').value=presentismo.toFixed(2);
	document.getElementById('txtIdMontoAntiguedad').value=antiguedad.toFixed(2);
	document.getElementById('txtIdMontoHorasExtra').value=horasExtra.toFixed(2);
	document.getElementById('txtIdMontoHorasFeriado').value=horasFeriado.toFixed(2);
	document.getElementById('txtIdMontoViaticos').value=viaticos.toFixed(2);
	document.getElementById('txtIdTotalBruto').value=totalBruto.toFixed(2);
	document.getElementById('txtIdTotalNeto').value=totalNeto.toFixed(2);
	document.getElementById('txtIdDineroACuenta').value=aCuentaBlancoIngresado.toFixed(2);
	document.getElementById('txtIdDineroEnSobre').value=aCuentaNegroIngresado.toFixed(2);
	document.getElementById('txtIdTotalEnMano').value=totalEnMano.toFixed(2);

}
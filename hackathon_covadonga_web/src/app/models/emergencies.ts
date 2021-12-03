export interface Emergencies{
    folio?:                      string;
    triage?:                     string;
    unidad?:                     string;
    estado?:                     string;
    expediente?:                 Expediente;
    signosVitales?:              SignosVitales;
    agenteCausal?:               string;
    descripcionTraumatismo?:     string;
    causaClinica?:               string;
    Tratamiento?:                string;
    ObservacionesTratamamiento?: string;
    km?:                     string;
    tiempo?:                     string;
}

export interface Expediente {
    idExpediente?: string;
    sexo?:         string;
    nombre?:       string;
}

export interface SignosVitales {
    temperatura?:            string;
    oxigenoSangre?:          string;
    precionArterial?:        string;
    pulsoCardiaco?:          string;
    frecuenciaRespiratoria?: string;
}

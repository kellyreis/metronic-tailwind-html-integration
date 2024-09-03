
import { Html } from "../../components/Content.tsx";
import {Formulario} from "./formulario.tsx";

export function CadatroPaciente() {
  return (
      <Html>        
        <div className="mb-5 lg:mb-10">
                <div className=" flex items-center justify-between flex-wrap gap-5">
                    <div className="gap-1 lg:gap-5">
                        <h1 className="font-medium text-lg text-gray-900">
                           Cadastrar Pacientes
                        </h1>
                        <span className="text-gray-900">
                            Cadastrar nova ficha de paciente
                        </span>
                    </div>
                    <div className="flex items-center gap-1">
                        <a href="cadastro-paciente" className="btn btn-info">
                            <i className="ki-outline ki-arrow-left">
                            </i>
                          Voltar
                        </a>
                    </div>
                </div>
            </div>
            <Formulario/>
      </Html>
  )
}
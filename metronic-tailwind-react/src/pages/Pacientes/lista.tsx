export function Pacientes() {
    return (
        <>
            <div className="mb-5 lg:mb-10">
                <div className=" flex items-center justify-between flex-wrap gap-5">
                    <div className="gap-1 lg:gap-5">
                        <h1 className="font-medium text-lg text-gray-900">
                            Lista de Pacientes
                        </h1>
                        <span className="text-gray-900">
                            Lista de pacientes cadastrados
                        </span>
                    </div>
                    <div className="flex items-center gap-1">
                        <a href="cadastro-paciente" className="btn btn-info">
                            <i className="ki-outline ki-plus-squared">
                            </i>
                            Cadastrar novo paciente
                        </a>
                    </div>
                </div>
            </div>
            <div className="mb-5 lg:mb-10">
                <div className="card">
                    <div className="card-body min-w-full">
                        <div className="flex justify-between gap-6">
                            <div className="w-3/4">
                                <div className="input-group">
                                    <input className="input" placeholder="Buscar nome" type="text" value="" />
                                    <span className="btn btn-secondary">
                                        Procurar
                                    </span>
                                </div>
                            </div>                         
                            <div className="w-80">
                                    <select className="select" name="select" title="Ordenar por: de A a Z">
                                        <option value="ASC">
                                        Ordenar por: de A a Z
                                        </option>
                                        <option value="DESC">
                                        Ordenar por: de Z a A
                                        </option>                           
                               </select>
                            </div>                           
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid">
                <div className="card card-grid min-w-full">
                    <div className="card-body">
                        <div data-datatable="true" data-datatable-page-size="10" className="datatable-initialized">
                            <div className="scrollable-x-auto">
                                <table className="table table-border" data-datatable-table="true" id="members_table">
                                    <thead>
                                        <tr>
                                            <th className="w-[60px] text-center">
                                                <input className="checkbox checkbox-sm" data-datatable-check="true" type="checkbox" title="Checkbox" />
                                            </th>
                                            <th className="min-w-[300px]">
                                                <span className="sort asc">
                                                    <span className="sort-label text-gray-700 font-bold">
                                                    Nome do paciente
                                                    </span>
                                                    <span className="sort-icon"></span>
                                                </span>
                                            </th>                                       
                                            <th className="min-w-[165px]">
                                                <span className="sort">
                                                    <span className="sort-label text-gray-700 font-bold">
                                                    Celular
                                                    </span>
                                                    <span className="sort-icon"></span>
                                                </span>
                                            </th>
                                            <th className="min-w-[165px]">
                                                <span className="sort">
                                                    <span className="sort-label text-gray-700 font-bold">
                                                    Convênio
                                                    </span>
                                                    <span className="sort-icon"></span>
                                                </span>
                                            </th>
                                            <th className="min-w-[165px]">
                                                <span className="sort">
                                                    <span className="sort-label text-gray-700 font-bold">
                                                    Evolução
                                                    </span>
                                                    <span className="sort-icon"></span>
                                                </span>
                                            </th>
                                            <th className="min-w-[165px]">
                                                <span className="sort">
                                                    <span className="sort-label text-gray-700 font-bold">
                                                    Data de Nascimento
                                                    </span>
                                                    <span className="sort-icon"></span>
                                                </span>
                                            </th>
                                            <th className="min-w-[165px]">
                                                <span className="sort">
                                                    <span className="sort-label text-gray-700 font-bold">
                                                    Data de Cadastro
                                                    </span>
                                                    <span className="sort-icon"></span>
                                                </span>
                                            </th>                                       
                                            <th className="w-[60px]"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="text-center">
                                                <input className="checkbox checkbox-sm" data-datatable-row-check="true" type="checkbox" value="1" title="Checkbox" />
                                            </td>
                                            <td>
                                                <div className="flex items-center gap-2.5">
                                                    <div>
                                                        <img alt="" className="h-9 rounded-full" src="././media/avatars/300-3.png" />
                                                    </div>
                                                    <div className="flex flex-col gap-0.5">                                              
                                                        <span className="badge badge-sm badge-light badge-outline">
                                                        Tyler Hero
                                                    </span>                                                   
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex flex-wrap gap-2.5 mb-2">
                                                    <span className="badge badge-sm badge-light badge-outline">
                                                    (19)0 0000-0000
                                                    </span>                                       
                                             
                                                </div>
                                            </td>
                                            <td>
                                            <span className="leading-none text-gray-800 font-normal">
                                                     Unimed
                                                    </span>
                                            </td>
                                            <td>     
                                            <div className="flex items-center gap-1.5">    
                                                        <span className="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
                                                        <i className="ki-outline ki-chart-line-down text-lg"></i>
                                                    </span>                                                                             
                                                        <a className="leading-none font-medium text-sm text-gray-900 hover:text-primary" href="#">
                                                            Ver evolução
                                                        </a> 
                                            </div> 
                                          
                                            </td>
                                            <td className="text-gray-800 font-normal">dd/mm/aaaa</td>
                                            <td className="text-gray-800 font-normal">dd/mm/aaaa</td>
                                            <td className="w-[60px]">
                                                <div className="menu" data-menu="true">
                                                    <div className="menu-item menu-item-dropdown" data-menu-item-offset="0, 10px" data-menu-item-placement="bottom-end" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:click">
                                                        <button className="menu-toggle btn btn-sm btn-icon btn-light btn-clear" title="Toggle Menu">
                                                            <i className="ki-filled ki-dots-vertical"></i>
                                                        </button>
                                                        <div className="menu-dropdown menu-default w-full max-w-[175px]" data-menu-dismiss="true">
                                                            <div className="menu-item">
                                                                <a className="menu-link" href="#">
                                                                    <span className="menu-icon">
                                                                        <i className="ki-filled ki-search-list"></i>
                                                                    </span>
                                                                    <span className="menu-title">
                                                                        Ver
                                                                    </span>
                                                                </a>
                                                            </div>
                                                            <div className="menu-item">
                                                                <a className="menu-link" href="#">
                                                                    <span className="menu-icon">
                                                                        <i className="ki-filled ki-file-up"></i>
                                                                    </span>
                                                                    <span className="menu-title">
                                                                        Imprimir
                                                                    </span>
                                                                </a>
                                                            </div>
                                                            <div className="menu-separator"></div>
                                                            <div className="menu-item">
                                                                <a className="menu-link" href="#">
                                                                    <span className="menu-icon">
                                                                        <i className="ki-filled ki-pencil"></i>
                                                                    </span>
                                                                    <span className="menu-title">
                                                                        Editar
                                                                    </span>
                                                                </a>
                                                            </div>                                                          
                                                            <div className="menu-separator"></div>
                                                            <div className="menu-item">
                                                                <a className="menu-link" href="#">
                                                                    <span className="menu-icon">
                                                                        <i className="ki-filled ki-trash"></i>
                                                                    </span>
                                                                    <span className="menu-title">
                                                                        Excluir
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                             
                                    </tbody>
                                </table>
                            </div>
                            <div className="card-footer justify-center md:justify-between flex-col md:flex-row gap-5 text-gray-600 text-2sm font-medium">
                                <div className="flex items-center gap-2 order-2 md:order-1">
                                    Show
                                    <select className="select select-sm w-16" data-datatable-size="true" name="perpage" title="Select number of items per page">
                                        <option value="5">5</option>
                                        <option value="10">10</option>
                                        <option value="20">20</option>
                                        <option value="30">30</option>
                                        <option value="50">50</option>
                                    </select>
                                    per page
                                </div>
                                <div className="flex items-center gap-4 order-1 md:order-2">
                                    <span data-datatable-info="true">1-10 of 33</span>
                                    <div className="pagination" data-datatable-pagination="true">
                                        <div className="pagination">
                                            <button className="btn disabled" title="Disabled Button">
                                                <i className="ki-outline ki-black-left"></i>
                                            </button>
                                            <button className="btn active disabled ">1</button>
                                            <button className="btn">2</button>
                                            <button className="btn">3</button>
                                            <button className="btn">...</button>
                                            <button className="btn" title="Cadastrar novo paciente">
                                                <i className="ki-outline ki-black-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
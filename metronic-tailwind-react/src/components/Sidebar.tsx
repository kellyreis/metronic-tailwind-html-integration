function Sidebar() {
  return <div
  className="sidebar dark:bg-coal-600 bg-light border-r border-r-gray-200 dark:border-r-coal-100 fixed top-0 bottom-0 z-20 hidden lg:flex flex-col items-stretch shrink-0"
  data-drawer="true"
  data-drawer-class="drawer drawer-start top-0 bottom-0"
  data-drawer-enable="true|lg:false"
  id="sidebar"
>
  <div
    className="sidebar-header hidden lg:flex items-center relative justify-between px-3 lg:px-6 shrink-0"
    id="sidebar_header"
  >
    <a className="dark:hidden" href="/home">
      <img
        className="default-logo min-h-[22px] max-w-none"
        src="/media/app/default-logo.svg"
      />
      <img
        className="small-logo min-h-[22px] max-w-none"
        src="/media/app/mini-logo.svg"
      />
    </a>
    <a className="hidden dark:block" href="/home">
      <img
        className="default-logo min-h-[22px] max-w-none"
        src="/media/app/default-logo-dark.svg"
      />
      <img
        className="small-logo min-h-[22px] max-w-none"
        src="/media/app/mini-logo.svg"
      />
    </a>
    <button
      className="btn btn-icon btn-icon-md size-[30px] rounded-lg border border-gray-200 dark:border-gray-300 bg-light text-gray-500 hover:text-gray-700 toggle absolute left-full top-2/4 -translate-x-2/4 -translate-y-2/4"
      data-toggle="body"
      data-toggle-class="sidebar-collapse"
      id="sidebar_toggle"
    >
      <i className="ki-filled ki-black-left-line toggle-active:rotate-180 transition-all duration-300"></i>
    </button>
  </div>
  <div
    className="sidebar-content flex grow shrink-0 py-5 pr-2"
    id="sidebar_content"
  >
    <div
      className="scrollable-y-hover grow shrink-0 flex pl-2 lg:pl-5 pr-1 lg:pr-3"
      data-scrollable="true"
      data-scrollable-dependencies="#sidebar_header"
      data-scrollable-height="auto"
      data-scrollable-offset="0px"
      data-scrollable-wrappers="#sidebar_content"
      id="sidebar_scrollable"
    >
      <div
        className="menu flex flex-col grow gap-0.5"
        data-menu="true"
        data-menu-accordion-expand-all="false"
        id="sidebar_menu"
      >
   
        <div className="menu-item pt-2.25 pb-px">
          <span className="menu-heading uppercase pl-[10px] pr-[10px] text-2sm font-semibold text-gray-500">
          Agenda
          </span>
        </div>

        <div
          className="menu-item"
          data-menu-item-toggle="accordion"
          data-menu-item-trigger="click"
        >
          <div
            className="menu-link flex items-center grow cursor-pointer border border-transparent gap-[10px] pl-[10px] pr-[10px] py-[6px]"
            tabIndex={0}
          >
            <span className="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
              <i className="ki-outline ki-calendar text-lg"></i>
            </span>
            <span className="menu-title text-sm font-semibold text-gray-700 menu-item-active:text-primary menu-link-hover:!text-primary">
            Minha Agenda
            </span>
          
          </div>  
     
        </div>

        <div
          className="menu-item"
          data-menu-item-toggle="accordion"
          data-menu-item-trigger="click"
        >
          <div
            className="menu-link flex items-center grow cursor-pointer border border-transparent gap-[10px] pl-[10px] pr-[10px] py-[6px]"
            tabIndex={0}
          >
            <span className="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
              <i className="ki-outline ki-calendar-add text-lg"></i>
            </span>
            <span className="menu-title text-sm font-semibold text-gray-700 menu-item-active:text-primary menu-link-hover:!text-primary">
            Cadastrar Agenda
            </span>
        
          </div>  
     
        </div>


        <div className="menu-item pt-2.25 pb-px">
          <span className="menu-heading uppercase pl-[10px] pr-[10px] text-2sm font-semibold text-gray-500">
          Relatórios
          </span>
        </div>
        <div
          className="menu-item"
          data-menu-item-toggle="accordion"
          data-menu-item-trigger="click"
        >
          <div
            className="menu-link flex items-center grow cursor-pointer border border-transparent gap-[10px] pl-[10px] pr-[10px] py-[6px]"
            tabIndex={0}
          >
            <span className="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
              <i className="ki-outline ki-questionnaire-tablet text-lg"></i>
            </span>
            <span className="menu-title text-sm font-semibold text-gray-700 menu-item-active:text-primary menu-link-hover:!text-primary">
            Relatório de Acompanhamento
            </span>
            <span className="menu-arrow text-gray-400 w-[20px] shrink-0 justify-end ml-1 mr-[-10px]">
              <i className="ki-filled ki-plus text-2xs menu-item-show:hidden"></i>
              <i className="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex"></i>
            </span>
          </div>
          <div className="menu-accordion gap-0.5 pl-[10px] relative before:absolute before:left-[20px] before:top-0 before:bottom-0 before:border-l before:border-gray-200">
            <div
              className="menu-item"
              data-menu-item-toggle="accordion"
              data-menu-item-trigger="click"
            >
              <div
                className="menu-link border border-transparent gap-[14px] pl-[10px] pr-[10px] py-[8px] grow cursor-pointer"
                tabIndex={0}
              >
                <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary"></span>
                <span className="menu-title text-2sm font-medium mr-1 text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                Listagem de Relatório
                </span>
             
              </div>
        
            </div>
            <div
              className="menu-item"
              data-menu-item-toggle="accordion"
              data-menu-item-trigger="click"
            >
              <div
                className="menu-link border border-transparent gap-[14px] pl-[10px] pr-[10px] py-[8px] grow cursor-pointer"
                tabIndex={0}
              >
                <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary"></span>
                <span className="menu-title text-2sm font-medium mr-1 text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                Cadastrar Relatório
                </span>
            
              </div>
              <div className="menu-accordion gap-0.5 relative before:absolute before:left-[32px] pl-[22px] before:top-0 before:bottom-0 before:border-l before:border-gray-200">
                <div className="menu-item">
                  <a
                    className="menu-link gap-[5px] pl-[10px] pr-[10px] py-[8px] border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg"
                    href="html/demo1/public-profile/projects/3-columns.html"
                    tabIndex={0}
                  >
                    <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary"></span>
                    <span className="menu-title text-2sm font-medium text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                      3 Columns
                    </span>
                  </a>
                </div>
                <div className="menu-item">
                  <a
                    className="menu-link gap-[5px] pl-[10px] pr-[10px] py-[8px] border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg"
                    href="html/demo1/public-profile/projects/2-columns.html"
                    tabIndex={0}
                  >
                    <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary"></span>
                    <span className="menu-title text-2sm font-medium text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                      2 Columns
                    </span>
                  </a>
                </div>
              </div>
            </div>    
          </div>
        </div>
        <div
          className="menu-item"
          data-menu-item-toggle="accordion"
          data-menu-item-trigger="click"
        >
          <div
            className="menu-link flex items-center grow cursor-pointer border border-transparent gap-[10px] pl-[10px] pr-[10px] py-[6px]"
            tabIndex={0}
          >
            <span className="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
              <i className="ki-outline ki-chart-line-down text-lg"></i>
            </span>
            <span className="menu-title text-sm font-semibold text-gray-700 menu-item-active:text-primary menu-link-hover:!text-primary">
                Evolução
            </span>
            <span className="menu-arrow text-gray-400 w-[20px] shrink-0 justify-end ml-1 mr-[-10px]">
              <i className="ki-filled ki-plus text-2xs menu-item-show:hidden"></i>
              <i className="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex"></i>
            </span>
          </div>
          <div className="menu-accordion gap-0.5 pl-[10px] relative before:absolute before:left-[20px] before:top-0 before:bottom-0 before:border-l before:border-gray-200">
            <div
              className="menu-item"
              data-menu-item-toggle="accordion"
              data-menu-item-trigger="click"
            >
              <div
                className="menu-link border border-transparent gap-[14px] pl-[10px] pr-[10px] py-[8px] grow cursor-pointer"
                tabIndex={0}
              >
                <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary"></span>
                <span className="menu-title text-2sm font-medium mr-1 text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                Listagem cadastro
                </span>
            
              </div>
  
            </div>
            <div
              className="menu-item"
              data-menu-item-toggle="accordion"
              data-menu-item-trigger="click"
            >
              <div
                className="menu-link border border-transparent gap-[14px] pl-[10px] pr-[10px] py-[8px] grow cursor-pointer"
                tabIndex={0}
              >
                <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary"></span>
                <span className="menu-title text-2sm font-medium mr-1 text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                Cadastrar ficha de evolução
                </span>
             
              </div>
         
            </div>
           
          </div>
        </div>
 
        <div className="menu-item pt-2.25 pb-px">
          <span className="menu-heading uppercase pl-[10px] pr-[10px] text-2sm font-semibold text-gray-500">
          Ficha Cadastral
          </span>
        </div>
        <div
          className="menu-item"
          data-menu-item-toggle="accordion"
          data-menu-item-trigger="click"
        >
          <div
            className="menu-link flex items-center grow cursor-pointer border border-transparent gap-[10px] pl-[10px] pr-[10px] py-[6px]"
            tabIndex={0}
          >
            <span className="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
              <i className="ki-outline ki-user-square text-lg"></i>
            </span>
            <span className="menu-title text-sm font-semibold text-gray-700 menu-item-active:text-primary menu-link-hover:!text-primary">
            Paciente
            </span>
            <span className="menu-arrow text-gray-400 w-[20px] shrink-0 justify-end ml-1 mr-[-10px]">
              <i className="ki-filled ki-plus text-2xs menu-item-show:hidden"></i>
              <i className="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex"></i>
            </span>
          </div>
          <div className="menu-accordion gap-0.5 pl-[10px] relative before:absolute before:left-[20px] before:top-0 before:bottom-0 before:border-l before:border-gray-200">
      
            <div
              className="menu-item"
              data-menu-item-toggle="accordion"
              data-menu-item-trigger="click"
            >
                  <a href="pacientes"> 
              <div
                className="menu-link border border-transparent gap-[14px] pl-[10px] pr-[10px] py-[8px] grow cursor-pointer"
                tabIndex={0}
              >
               
                <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary"></span>
                <span className="menu-title text-2sm font-medium mr-1 text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                 Listagem cadastral   
                </span>
            
              </div>
              </a>
            </div>
            <div
              className="menu-item"
              data-menu-item-toggle="accordion"
              data-menu-item-trigger="click"
            >
                    <a href="cadastro-paciente"> 
              <div
                className="menu-link border border-transparent gap-[14px] pl-[10px] pr-[10px] py-[8px] grow cursor-pointer"
                tabIndex={0}
              >
                <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary"></span>
                <span className="menu-title text-2sm font-medium mr-1 text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                Cadastrar ficha 
                </span>
             
              </div>
              </a>
         
            </div>
           
          </div>
        </div>
        <div
          className="menu-item"
          data-menu-item-toggle="accordion"
          data-menu-item-trigger="click"
        >
          <div
            className="menu-link flex items-center grow cursor-pointer border border-transparent gap-[10px] pl-[10px] pr-[10px] py-[6px]"
            tabIndex={0}
          >
            <span className="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
              <i className="ki-outline ki-user text-lg"></i>
            </span>
            <span className="menu-title text-sm font-semibold text-gray-700 menu-item-active:text-primary menu-link-hover:!text-primary">
            Profissional
            </span>
            <span className="menu-arrow text-gray-400 w-[20px] shrink-0 justify-end ml-1 mr-[-10px]">
              <i className="ki-filled ki-plus text-2xs menu-item-show:hidden"></i>
              <i className="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex"></i>
            </span>
          </div>
          <div className="menu-accordion gap-0.5 pl-[10px] relative before:absolute before:left-[20px] before:top-0 before:bottom-0 before:border-l before:border-gray-200">
            <div
              className="menu-item"
              data-menu-item-toggle="accordion"
              data-menu-item-trigger="click"
            >
              <div
                className="menu-link border border-transparent gap-[14px] pl-[10px] pr-[10px] py-[8px] grow cursor-pointer"
                tabIndex={0}
              >
                <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary"></span>
                <span className="menu-title text-2sm font-medium mr-1 text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                Listagem de profissional
                </span>
            
              </div>
  
            </div>
            <div
              className="menu-item"
              data-menu-item-toggle="accordion"
              data-menu-item-trigger="click"
            >
              <div
                className="menu-link border border-transparent gap-[14px] pl-[10px] pr-[10px] py-[8px] grow cursor-pointer"
                tabIndex={0}
              >
                <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary"></span>
                <span className="menu-title text-2sm font-medium mr-1 text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                Cadastrar profissional 
                </span>
             
              </div>
         
            </div>
           
          </div>
        </div>
        <div
          className="menu-item"
          data-menu-item-toggle="accordion"
          data-menu-item-trigger="click"
        >
          <div
            className="menu-link flex items-center grow cursor-pointer border border-transparent gap-[10px] pl-[10px] pr-[10px] py-[6px]"
            tabIndex={0}
          >
            <span className="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
              <i className="ki-outline ki-profile-circle text-lg"></i>
            </span>
            <span className="menu-title text-sm font-semibold text-gray-700 menu-item-active:text-primary menu-link-hover:!text-primary">
            Acompanhante Terapêutico
            </span>
            <span className="menu-arrow text-gray-400 w-[20px] shrink-0 justify-end ml-1 mr-[-10px]">
              <i className="ki-filled ki-plus text-2xs menu-item-show:hidden"></i>
              <i className="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex"></i>
            </span>
          </div>
          <div className="menu-accordion gap-0.5 pl-[10px] relative before:absolute before:left-[20px] before:top-0 before:bottom-0 before:border-l before:border-gray-200">
            <div
              className="menu-item"
              data-menu-item-toggle="accordion"
              data-menu-item-trigger="click"
            >
              <div
                className="menu-link border border-transparent gap-[14px] pl-[10px] pr-[10px] py-[8px] grow cursor-pointer"
                tabIndex={0}
              >
                <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary"></span>
                <span className="menu-title text-2sm font-medium mr-1 text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                Listagem de cadastro
                </span>
            
              </div>
  
            </div>
            <div
              className="menu-item"
              data-menu-item-toggle="accordion"
              data-menu-item-trigger="click"
            >
              <div
                className="menu-link border border-transparent gap-[14px] pl-[10px] pr-[10px] py-[8px] grow cursor-pointer"
                tabIndex={0}
              >
                <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary"></span>
                <span className="menu-title text-2sm font-medium mr-1 text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                Cadastrar acompanhante terapêutico
                </span>
             
              </div>
         
            </div>
           
          </div>
        </div>
        <div className="menu-item pt-2.25 pb-px">
          <span className="menu-heading uppercase pl-[10px] pr-[10px] text-2sm font-semibold text-gray-500">
            Plano Médico
          </span>
        </div>
        <div
          className="menu-item"
          data-menu-item-toggle="accordion"
          data-menu-item-trigger="click"
        >
          <div
            className="menu-link flex items-center grow cursor-pointer border border-transparent gap-[10px] pl-[10px] pr-[10px] py-[6px]"
            tabIndex={0}
          >
            <span className="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
              <i className="ki-outline ki-pulse text-lg"></i>
            </span>
            <span className="menu-title text-sm font-semibold text-gray-700 menu-item-active:text-primary menu-link-hover:!text-primary">
            Listagem de plano médico
            </span>
       
          </div>
        
        </div>
        <div
          className="menu-item"
          data-menu-item-toggle="accordion"
          data-menu-item-trigger="click"
        >
          <div
            className="menu-link flex items-center grow cursor-pointer border border-transparent gap-[10px] pl-[10px] pr-[10px] py-[6px]"
            tabIndex={0}
          >
            <span className="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
              <i className="ki-outline ki-message-add text-lg"></i>
            </span>
            <span className="menu-title text-sm font-semibold text-gray-700 menu-item-active:text-primary menu-link-hover:!text-primary">
            Cadastrar plano médico
            </span>
       
          </div>
        
        </div>
 
        <div className="menu-item pt-2.25 pb-px">
          <span className="menu-heading uppercase pl-[10px] pr-[10px] text-2sm font-semibold text-gray-500">
            Acompanhamento
          </span>
        </div>
        <div className="menu-item">
        <a href="comunidade"> 
          <div
            className="menu-label gap-[10px] pl-[10px] pr-[10px] py-[6px] border border-transparent"
            tabIndex={0}
          >
            <span className="menu-icon items-start w-[20px] text-gray-500 dark:text-gray-400">
              <i className="ki-outline ki-like-tag text-lg"></i>
            </span>
            <span className="menu-title text-sm font-semibold text-gray-700">
              Comunidade
            </span>       
          </div>
          </a>
        </div>
        <div className="menu-item">
          <div
            className="menu-label gap-[10px] pl-[10px] pr-[10px] py-[6px] border border-transparent"
            tabIndex={0}
          >
            <span className="menu-icon items-start w-[20px] text-gray-500 dark:text-gray-400">
              <i className="ki-outline ki-home text-lg"></i>
            </span>
            <span className="menu-title text-sm font-semibold text-gray-700">
              Home
            </span>
         
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
}

export default Sidebar

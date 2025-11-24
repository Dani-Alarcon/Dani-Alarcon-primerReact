import React from 'react';

class Contacte extends React.Component {
    state = {
        dadesFormulari: {
            nom: '', 
            email: '',
            assumpte: 'consultaGeneral', 
            missatge: '' 
        },
        estatEnviament: null 
    };

    gestionaCanvi = (e) => {
        const { name, value } = e.target;
        this.setState(prevState => ({
            dadesFormulari: {
                ...prevState.dadesFormulari,
                [name]: value
            }
        }));
    };

    gestionaEnviament = (e) => {
        e.preventDefault();
        this.setState({ estatEnviament: 'loading' });
        console.log("Dades del formulari a enviar:", this.state.dadesFormulari);

        setTimeout(() => {
            this.setState({
                estatEnviament: 'success',
                dadesFormulari: {
                    nom: '',
                    email: '',
                    assumpte: 'consultaGeneral',
                    missatge: ''
                }
            });

            setTimeout(() => this.setState({ estatEnviament: null }), 5000);
        }, 1500);
    };

    render() {
        const { dadesFormulari, estatEnviament } = this.state;
        const { nom, email, assumpte, missatge } = dadesFormulari;

        const estilInput = "w-full p-3 rounded-lg bg-[#3d4f61] border border-[#4b617b] text-white placeholder-white/50 focus:ring-2 focus:ring-[#9eefe5] focus:border-transparent transition duration-200 shadow-inner";

        const TITOL_PAGINA = "Contacta'ns";
        const SUBTITOL = "Estem aquí per respondre els teus dubtes sobre videojocs i notícies.";

        return (
            <main className="relative w-full min-h-screen py-16 bg-[#2c373d] overflow-hidden" style={{ width: "100vw" }}>

                <section className="max-w-4xl mx-auto px-4 relative z-10">

                    <header className="text-center mb-12">
                        <div className="inline-flex items-center gap-3 mb-4">
                            <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-[#9eefe5]/50 rounded-full"></div>
                            <h1 className="text-4xl md:text-5xl font-bold text-[#9eefe5] font-iceberg drop-shadow-lg">
                                {TITOL_PAGINA}
                            </h1>
                            <div className="h-0.5 w-16 bg-gradient-to-l from-transparent to-[#9eefe5]/50 rounded-full"></div>
                        </div>
                        <p className="text-white/80 text-xl max-w-xl mx-auto">{SUBTITOL}</p>
                    </header>

                    <div className="bg-[#4b617b] p-6 sm:p-10 rounded-xl shadow-2xl border-2 border-[#9eefe5]/40">
                        <form onSubmit={this.gestionaEnviament} className="space-y-6">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="nom" className="block text-sm font-medium text-white mb-2">
                                        Nom Complet
                                    </label>
                                    <input
                                        type="text"
                                        id="nom"
                                        name="nom"
                                        value={nom}
                                        onChange={this.gestionaCanvi}
                                        className={estilInput}
                                        placeholder="El teu nom"
                                        required
                                        disabled={estatEnviament === 'loading'}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                                        Adreça de Correu Electrònic
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={this.gestionaCanvi}
                                        className={estilInput}
                                        placeholder="el.teu.correu@exemple.cat"
                                        required
                                        disabled={estatEnviament === 'loading'}
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="assumpte" className="block text-sm font-medium text-white mb-2">
                                    Assumpte
                                </label>
                                <select
                                    id="assumpte"
                                    name="assumpte"
                                    value={assumpte}
                                    onChange={this.gestionaCanvi}
                                    className={`${estilInput} appearance-none cursor-pointer`}
                                    required
                                    disabled={estatEnviament === 'loading'}
                                >
                                    <option value="consultaGeneral">Consulta General</option>
                                    <option value="suportTecnic">Suport Tècnic</option>
                                    <option value="suggeriments">Suggeriments i Feedback</option>
                                    <option value="colaboracio">Col·laboració o Negocis</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="missatge" className="block text-sm font-medium text-white mb-2">
                                    Missatge
                                </label>
                                <textarea
                                    id="missatge"
                                    name="missatge"
                                    rows="5"
                                    value={missatge}
                                    onChange={this.gestionaCanvi}
                                    className={estilInput}
                                    placeholder="Escriu el teu missatge detallat aquí..."
                                    required
                                    disabled={estatEnviament === 'loading'}
                                ></textarea>
                            </div>

                            <div className="pt-4 flex flex-col items-center">
                                <button
                                    type="submit"
                                    className="w-full sm:w-auto px-10 py-3 bg-[#9eefe5] text-[#2c373d] rounded-lg font-bold text-lg
                                               hover:bg-white transition-all duration-300 shadow-xl transform hover:scale-[1.02] font-iceberg
                                               disabled:opacity-60 disabled:cursor-not-allowed"
                                    disabled={estatEnviament === 'loading'}
                                >
                                    {estatEnviament === 'loading' ? (
                                        <span className="flex items-center gap-2">
                                            <svg className="animate-spin h-5 w-5 text-[#2c373d]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Enviant...
                                        </span>
                                    ) : (
                                        "Enviar Missatge"
                                    )}
                                </button>
                                {estatEnviament === 'success' && (
                                    <p className="mt-4 text-[#9eefe5] font-semibold text-center animate-bounce">
                                        Missatge enviat amb èxit! Gràcies per contactar-nos.
                                    </p>
                                )}
                                {estatEnviament === 'error' && (
                                    <p className="mt-4 text-red-400 font-semibold text-center">
                                        Error en l'enviament. Si us plau, torna a intentar-ho més tard.
                                    </p>
                                )}
                            </div>

                        </form>
                    </div>
                </section>
            </main>
        );
    }
}

export default Contacte;
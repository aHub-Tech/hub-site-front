export const state = () => ({
    blocks: [],
})

export const mutations = {
    setBlocks(state, data) {
        state.blocks = data || [];
    },
}

export const actions = {
    getBlocks({ commit }) {
        const data = [
            {
                titleColor: "#39f290",
                baseColor: "red",
                source: "/learn_design.svg",
                title: ["DEV.", "FRONT-END"],
                info: {
                    quote: "O Front-end está muito relacionado com a interface gráfica do projeto. Ou seja, é onde se desenvolve a aplicação com a qual o usuário irá interagir diretamente, seja em softwares, sites, aplicativos, etc.",
                    author: "Totvs"
                },
                subjects: 2
            },
            {
                baseColor: "blue",
                source: "/learn_computing.svg",
                title: ["DEV.", "BACK-END"],
                info: {
                    quote: "Back-end se relaciona com o que está por trás das aplicações desenvolvidas na programação",
                    author: "Totvs"
                },
                subjects: 5
            },
            {
                baseColor: "white",
                source: "/learn_cloud.svg",
                title: ["DEVOPS", "CLOUD"],
                info: {
                    quote: "DevOps é um modelo que combina filosofias culturais, práticas e ferramentas que aumentam a capacidade de uma empresa distribuir seus serviços em alta velocidade",
                    author: "Treinaweb"
                },
                subjects: 4
            },
            {
                titleColor: "#ffc100",
                baseColor: "grey",
                source: "/learn_web_design.svg",
                title: ["UI.UX", "WEB DESIGN"],
                info: {
                    quote: "Essa área define como melhorar a interação entre usuários e aplicativos ou softwares. O objetivo é melhorar a experiência e aumentar o lucro das empresas.",
                    author: "RockContent"
                },
                subjects: 6
            },
            {
                baseColor: "light_blue",
                source: "/learn_cloud.svg",
                title: ["DEV.", "MOBILE"],
                info: {
                    quote: "A área responsavel por projetar e elaborar aplicativos de celular, para qualquer finalidade, inclusive a educação",
                    author: "Orientu"
                },
                subjects: 0
            },
        ]

        commit('setBlocks', data)
    }
}

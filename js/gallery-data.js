// /**
//  * Dados da galeria da Academia Carolinas
//  * Este arquivo contém informações sobre as imagens e vídeos exibidos na galeria
//  */

// // Array com os dados das imagens organizados por categoria
// const galleryImages = {
//     'atividades-educativas': [
//         {
//             src: 'public/ATIVIDADES-EDUCATIVAS/3bf0681c-917e-48cb-a3f8-d98bfcd715fb copy.jpg',
//             thumbnail: '../public/ATIVIDADES-EDUCATIVAS/3bf0681c-917e-48cb-a3f8-d98bfcd715fb.jpg',
//             alt: 'Atividades educativas com crianças',
//             title: 'Atividades Educativas'
//         },
//         {
//             src: '../public/ATIVIDADES-EDUCATIVAS/b89e21d8-59f2-4d51-a408-0da3276d3131.jpg',
//             thumbnail: '../public/ATIVIDADES-EDUCATIVAS/b89e21d8-59f2-4d51-a408-0da3276d3131.jpg',
//             alt: 'Aulas e oficinas para a comunidade',
//             title: 'Atividades Educativas'
//         },
//         {
//             src: '../public/ATIVIDADES-EDUCATIVAS/E47EC87E-ED8C-484F-9760-8BAB45DDF749.JPG',
//             thumbnail: '../public/ATIVIDADES-EDUCATIVAS/E47EC87E-ED8C-484F-9760-8BAB45DDF749.JPG',
//             alt: 'Atividades de aprendizagem',
//             title: 'Atividades Educativas'
//         },
//         {
//             src: '../public/ATIVIDADES-EDUCATIVAS/f4420150-0264-4138-b0f9-5b651ec1ebd2.jpg',
//             thumbnail: '../public/ATIVIDADES-EDUCATIVAS/f4420150-0264-4138-b0f9-5b651ec1ebd2.jpg',
//             alt: 'Oficina educativa',
//             title: 'Atividades Educativas'
//         }
//     ],
//     'cozinha-comunitaria': [
//         {
//             src: '../public/COZINHA-COMUNITÁRIA/IMG_9110.jpg',
//             thumbnail: '../public/COZINHA-COMUNITÁRIA/IMG_9110.jpg',
//             alt: 'Preparo de refeições na cozinha solidária',
//             title: 'Cozinha Comunitária'
//         },
//         {
//             src: '../public/COZINHA-COMUNITÁRIA/IMG_9118.jpg',
//             thumbnail: '../public/COZINHA-COMUNITÁRIA/IMG_9118.jpg',
//             alt: 'Voluntários trabalhando na cozinha',
//             title: 'Cozinha Comunitária'
//         },
//         {
//             src: '../public/COZINHA-COMUNITÁRIA/IMG_9120.jpg',
//             thumbnail: '../public/COZINHA-COMUNITÁRIA/IMG_9120.jpg',
//             alt: 'Distribuição de alimentos',
//             title: 'Cozinha Comunitária'
//         },
//         {
//             src: '../public/COZINHA-COMUNITÁRIA/IMG_9126.jpg',
//             thumbnail: '../public/COZINHA-COMUNITÁRIA/IMG_9126.jpg',
//             alt: 'Preparo de alimentos',
//             title: 'Cozinha Comunitária'
//         },
//         {
//             src: '../public/COZINHA-COMUNITÁRIA/IMG_9131.jpg',
//             thumbnail: '../public/COZINHA-COMUNITÁRIA/IMG_9131.jpg',
//             alt: 'Refeições prontas para distribuição',
//             title: 'Cozinha Comunitária'
//         }
//     ],
//     'espaco-fisico': [
//         {
//             src: '../public/ESPAÇO-FÍSICO/ESCRITORIO .jpg',
//             thumbnail: '../public/ESPAÇO-FÍSICO/ESCRITORIO .jpg',
//             alt: 'Escritório da Academia Carolinas',
//             title: 'Espaço Físico'
//         },
//         {
//             src: '../public/ESPAÇO-FÍSICO/ESCRITORIO.jpg',
//             thumbnail: '../public/ESPAÇO-FÍSICO/ESCRITORIO.jpg',
//             alt: 'Área administrativa',
//             title: 'Espaço Físico'
//         }
//     ],
//     'horta': [
//         {
//             src: '../public/HORTA/WhatsApp Image 2025-05-20 at 16.56.03.jpeg',
//             thumbnail: '../public/HORTA/WhatsApp Image 2025-05-20 at 16.56.03.jpeg',
//             alt: 'Horta comunitária',
//             title: 'Horta'
//         },
//         {
//             src: '../public/HORTA/WhatsApp Image 2025-05-20 at 16.56.04.jpeg',
//             thumbnail: '../public/HORTA/WhatsApp Image 2025-05-20 at 16.56.04.jpeg',
//             alt: 'Cultivo de hortaliças',
//             title: 'Horta'
//         },
//         {
//             src: '../public/HORTA/WhatsApp Image 2025-05-20 at 17.08.59.jpeg',
//             thumbnail: '../public/HORTA/WhatsApp Image 2025-05-20 at 17.08.59.jpeg',
//             alt: 'Trabalho na horta',
//             title: 'Horta'
//         },
//         {
//             src: '../public/HORTA/WhatsApp Image 2025-05-20 at 17.09.00.jpeg',
//             thumbnail: '../public/HORTA/WhatsApp Image 2025-05-20 at 17.09.00.jpeg',
//             alt: 'Plantação comunitária',
//             title: 'Horta'
//         }
//     ],
//     'imagens-gerais': [
//         {
//             src: '../public/IMAGENS-GERAIS/evento externo itau cultural.jpg',
//             thumbnail: '../public/IMAGENS-GERAIS/evento externo itau cultural.jpg',
//             alt: 'Evento no Itaú Cultural',
//             title: 'Imagens Gerais'
//         },
//         {
//             src: '../public/IMAGENS-GERAIS/Evento externo orgânicos .jpeg',
//             thumbnail: '../public/IMAGENS-GERAIS/Evento externo orgânicos .jpeg',
//             alt: 'Evento sobre alimentos orgânicos',
//             title: 'Imagens Gerais'
//         },
//         {
//             src: '../public/IMAGENS-GERAIS/evento externo orgânicos fatec.jpeg',
//             thumbnail: '../public/IMAGENS-GERAIS/evento externo orgânicos fatec.jpeg',
//             alt: 'Evento na FATEC sobre orgânicos',
//             title: 'Imagens Gerais'
//         },
//         {
//             src: '../public/IMAGENS-GERAIS/Horta Dona Sebastiana.png',
//             thumbnail: '../public/IMAGENS-GERAIS/Horta Dona Sebastiana.png',
//             alt: 'Horta Dona Sebastiana',
//             title: 'Imagens Gerais'
//         },
//         {
//             src: '../public/IMAGENS-GERAIS/Horta Dona Sebastiana(1).png',
//             thumbnail: '../public/IMAGENS-GERAIS/Horta Dona Sebastiana(1).png',
//             alt: 'Horta Dona Sebastiana - vista panorâmica',
//             title: 'Imagens Gerais'
//         }
//     ],
//     'inicio-projeto': [
//         {
//             src: 'public/INICIO-PROJETO/67fb6506-c5e6-47b3-95a2-c8bf32875423 (1).JPG',
//             thumbnail: '../public/INICIO-PROJETO/67fb6506-c5e6-47b3-95a2-c8bf32875423 (1).JPG',
//             alt: 'Início das atividades',
//             title: 'Início do Projeto'
//         },
//         // {
//         //     src: '../public/INICIO-PROJETO/d55c3f73-d046-4c24-86d7-8784f98b48d9.jpg',
//         //     thumbnail: '../public/INICIO-PROJETO/d55c3f73-d046-4c24-86d7-8784f98b48d9.jpg',
//         //     alt: 'Primeiros passos do projeto',
//         //     title: 'Início do Projeto'
//         // },
//         // {
//         //     src: '../public/INICIO-PROJETO/IMG_2831.HEIC',
//         //     thumbnail: '../public/INICIO-PROJETO/IMG_2831.HEIC',
//         //     alt: 'Inauguração do espaço',
//         //     title: 'Início do Projeto'
//         // },
//         // {
//         //     src: '../public/INICIO-PROJETO/IMG_7066.HEIC',
//         //     thumbnail: '../public/INICIO-PROJETO/IMG_7066.HEIC',
//         //     alt: 'Preparação do local',
//         //     title: 'Início do Projeto'
//         // },
//         // {
//         //     src: '../public/INICIO-PROJETO/IMG_7434.HEIC',
//         //     thumbnail: '../public/INICIO-PROJETO/IMG_7434.HEIC',
//         //     alt: 'Voluntários da primeira fase',
//         //     title: 'Início do Projeto'
//         // },
//         // {
//         //     src: '../public/INICIO-PROJETO/IMG_7449.HEIC',
//         //     thumbnail: '../public/INICIO-PROJETO/IMG_7449.HEIC',
//         //     alt: 'Construção da sede',
//         //     title: 'Início do Projeto'
//         // },
//         // {
//         //     src: '../public/INICIO-PROJETO/IMG_8467.HEIC',
//         //     thumbnail: '../public/INICIO-PROJETO/IMG_8467.HEIC',
//         //     alt: 'Equipe fundadora',
//         //     title: 'Início do Projeto'
//         // }
//     ]
// };


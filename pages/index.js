/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */

import Page from "../src/modules/Home/index"

export default Page

// import Head from "next/head";
// import { Box, Text } from "@chakra-ui/react";

// const Home = ({ list }) =>{
    

//     return (
//         <Box>
//             <Head>
//                 <title>Site Legal</title>
//             </Head>
//             <main>
//                 {/* <ul>
//             {list && list.map(item =>(
//                 <li>
//                     <img src={`http://image.tmdb.org/t/p/original${item.poster_path}`} width={"150px"}/> <br/>
//                     {item.title}
//                 </li>
//             ))}
//         </ul> */}

//                 <Text> </Text>

//                 <ul>
//                     {list.map(item=>(<li><img alt=""src={`http://image.tmdb.org/t/p/original/${item.poster_path}`}/></li>))}
//                         
//                            
//                        
//                   
//                 </ul>
//             </main>
//         </Box>
//     )
// }
// export default Home

// export async function getServerSideProps() {
//     const res = await fetch("http://localhost:3000/api/trending");
//     const json = await res.json();
//     return {
//         props: {
//             list: json.list
//         }
//     }
// }
 


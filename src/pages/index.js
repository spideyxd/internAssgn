import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/styles.module.css'
import Section from '../../components/Section'
export default function Home({data}) {
  return (
    <>
   <Section data={data}/>  
    </>
  )
} 

export async function getStaticProps() {
  const res = await fetch("https://mocki.io/v1/ee762599-31ae-4a3d-a6c7-d596525945e1");
  const data =await res.json();
  // console.log(data);
  return {
    props: {
      data,
    }
  };
};
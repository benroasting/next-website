import React from 'react'
import { useRouter } from "next/router";
import Layout from '../components/layout';

function ProjectScreen(props) {

    const { project } = props;
    const router = useRouter();
    if (!project) {
        return <Layout></Layout>
    }
  return (
    <div>[slug]</div>
  )
}

export default ProjectScreen
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import {  useParams } from "react-router-dom";
import {Grid} from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponents";
import { useStore } from "../../../app/stores/store";
import TerminiDetailedChat from "./TerminiDetailedChat";
import TerminiDetailedInfo from "./TerminiDetailedInfo";
import TerminiDetailedSidebar from "./TerminiDetailedSidebar";
import TerminiDetaledHeader from "./TerminiDetaledHeader";



export default observer(function TerminiDetails(){
    const {terminiStore} = useStore();
    const {selectedTermini: termini, loadTermini, loadingInitial} = terminiStore;
    const {id} = useParams<{id: string}>();
    
    useEffect(() => {
      if(id) loadTermini(id);
    }, [id, loadTermini]);

    if(loadingInitial || !termini) return <LoadingComponent content={""} />;

    return (
      <Grid>
        <Grid.Column width={10}>
          <TerminiDetaledHeader termini={termini}/>
          <TerminiDetailedInfo termini={termini}/>
          <TerminiDetailedChat />
        </Grid.Column>
        <Grid.Column width={6}>
          <TerminiDetailedSidebar />
        </Grid.Column>
      </Grid>
    )
})
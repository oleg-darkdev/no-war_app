<script>
import ListCard from './ListCard.svelte';
import UnitsList from './InfoOccupants/UnitsList.svelte';
import DocsCard from './InfoOccupants/DocsCard.svelte';
// Data
import occupantsData from '../data/occupantsData';

let showUnitsRF = false,
	showDocsRF = false,
	showVideosRF = false,
	showPhotosRF = false,
    showDeathPhotosRF = false,
	showUnitsRB = false,
	showDocsRB = false,
	showVideosRB = false,
    showDeathPhotosRB = false,
	showPhotosRB = false;
</script>

<div style="display: flex; align-items: center; flex-direction: column; margin-bottom: 25px;">
    <h2>Информация по регулярной армии РФ</h2>
    <p>
        К сожалению, очень много убитых сложно опознать. Мы сознательно выкладываем эти фото и видео, возможно вы опознаете кого-то по косвенным признакам.
        Информация обновляется постоянно.
    </p>
    
    <ListCard bind:showSection={showDocsRF}  text='Найденные документы - Россия'/>
    {#if showDocsRF}
        <DocsCard data={occupantsData.rf.docListRF }/>
    {/if}

    <!-- <ListCard bind:showSection={showVideos}  text='Видео пленных РФ'/>
    {#if showVideos}
        {#each videosList as video}
            <Card>
                <Media class="card-media-16x9" aspectRatio="16x9">
                    <iframe width="560" height="315" src="{video}" frameborder="0" allowfullscreen></iframe>
                </Media>
            </Card>
        {/each}
    {/if} -->
    <ListCard bind:showSection={showPhotosRF}  text='Фото пленных солдат - Россия'/>
    {#if showPhotosRF}
            <DocsCard data={occupantsData.rf.photosListRF}/>
    {/if}
    
    <!-- <ListCard bind:showSection={showDeathPhotosRF}  text='Фото мертвых солдат - Россия'/>
    {#if showPhotosRF}
            <DocsCard data={occupantsData.rf.deathPhotosList}/>
    {/if} -->
 
    <ListCard bind:showSection={showUnitsRF} text='Военные части - Россия'/>
    {#if showUnitsRF}
        <UnitsList data={occupantsData.rf.unitsListRF} />
    {/if}
    
  
</div>
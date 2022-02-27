<script>
  import Drawer, {
  AppContent,
  Header,
  Subtitle,
  Title,
  Scrim,
} from '@smui/drawer';  
// import Header from '../layout/Header.svelte';
import Footer from '../layout/Footer.svelte';
</script>

<AppContent class="app-content">
    <main class="main-content">
        <slot />
    </main>
</AppContent> 

<Footer />
<style>
/* .main-content {
    overflow: auto;
    padding: 0px;
    height: 100%;
    box-sizing: border-box;
    z-index: 0;
    overflow-x: hidden;
    overflow-y: hidden	
  } */

:global(.section-body) {
  display: flex;
  justify-content: center;
  padding: 50px 0;
 
}

:global(.bg-img) {
background-position: center center;      
background-repeat: no-repeat;      
/* background-attachment: fixed;       */
background-size: cover;      
background-color: #fff;

}

/* Hide everything above this component. */
  :global(app),
  :global(body),
  :global(html) {
    display: block !important;
    height: auto !important;
    width: auto !important;
    position: static !important;
      background-color:#191B1B;

  }
       
    * :global(.app-content) {
    flex: auto;
    overflow: auto;
    position: relative;
    flex-grow: 1;
  }
       

:global(.hidden) {
	display: none;
}      

</style>
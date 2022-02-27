<script>
import List, {
    Group,
    Item,
    Subheader,
    Text
} from '@smui/list';
import Card, {
    Content,
    PrimaryAction,
    Media,
    MediaContent,
} from '@smui/card';
import PartGameFaqList from './PartGameFaqList.svelte';



export let data = {}
</script>


 <Card style="width: 100%; max-width: 100%; min-width: 300px;background-color: red; margin-bottom: 15px;">
        <Media style="background-image: url(''); max-height: 300px; height: 230px; width: 100%; min-width: 300px; "/>
            <Content class="mdc-typography--body2">
                <div style="display: flex; justify-content: center;">
                    <Card style='min-width: 320px; width: auto; border-color: red;  height: 80px; margin-bottom: 15px;'>
                        <PrimaryAction style="display: flex; align-items: center;" padded>
                            <!--  on:click={() => {
                            data.showFaq = !data.showFaq;
                        }} -->
                            <span style="font: 35px 'grafitty'; color: #fff;">text - FAQ</span>
                        </PrimaryAction>
                    </Card>
                 </div>

            <!-- {#if data.showFaq}
                <div style="display: flex; justify-content: center; width: 100%;">
                    <Group style="width: 100%;">
                        <PartGameFaqList text="Basic FAQ ⁉️" faqData={data.basicFAQ}/>
                        <PartGameFaqList text="Popular FAQ ⁉️" faqData={data.popularFaq}/>
                        <PartGameFaqList text="Other FAQ ⁉️" faqData={data.otherFaq}/>
                    </Group>
                </div>
            {/if} -->
    </Content>
</Card>

<style>

</style>

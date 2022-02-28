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

import faqdata from '../../data/FAQ';


</script>


 <Card style="width: 100%; max-width: 100%; min-width: 300px;background-color: #F2DD31; margin-bottom: 15px;">
    <Media style="background-image: url('');  height: auto; width: 100%; min-width: 300px; "/>
    <Content class="mdc-typography--body2">
        <div style="display: flex; justify-content: center; width: 100%;">
            <Group style="width: 100%;">
                <PartGameFaqList text="Жителям с РФ ⁉️" faqData={faqdata.occupantsRF}/>
                <PartGameFaqList text="Жителям с РБ ⁉️" faqData={faqdata.occupantsRB}/>
                <PartGameFaqList text="Популярные вопросы ⁉️" faqData={faqdata.popular}/>
                <PartGameFaqList text="Остальные вопрос ⁉️" faqData={faqdata.other}/>
            </Group>
        </div>
    </Content>
</Card>

<style>

</style>

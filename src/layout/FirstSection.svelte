<script>
import Paper, {Content} from '@smui/paper/dist';
</script>

<style>

</style>

<section style="width: 100%; max-height: 500px; ">
  <div style="background-color: #F2DD31; display: flex; justify-content: center; ">
    <Paper color="primary" style="width: 780px; margin: -50px 0 -50px 0; display: flex; justify-content: center; background-color: #fff;  max-width: 1200px;" >
      <Content >
        <slot>
        </slot>
      </Content>
    </Paper>
  </div>
</section>



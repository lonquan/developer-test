<template>
  <div class="table">
    <el-table :data="tableData" style="width: 100%; border-radius: 10px">
      <el-table-column prop="lottery_id" label="ID"> </el-table-column>
      <el-table-column prop="lottery_name" label="彩票名称"> </el-table-column>
      <el-table-column prop="lottery_type_id" label="类型ID"> </el-table-column>
      <el-table-column prop="remarks" label="备注"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "TableList",
  data() {
    return {
      tableData: [],
    };
  },
  mounted() {
    this.getTableList();
  },
  methods: {
    async getTableList() {
      try {
        let res = await this.$http.get("/lottery/types?key=28e6eff396760b29f3388c01ec5e8a31");
        this.tableData = res.data.result;
      } catch (e) {
        console.log("啊哦!请求出错咯~");
      }
    },
  },
};
</script>
<style scoped>
.table {
  width: 50vw;
  border-radius: 10px;
  box-shadow: 1px 10px 50px rgb(181 108 108);
}
</style>

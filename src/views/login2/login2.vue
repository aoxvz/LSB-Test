  <template>
    <el-table
      :data="listLoading"
      style="width: 100%">
      
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </template>

<script>

import { table_test } from '@/api/table_test'

export default {
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  methods: {
    fetchData() {
      this.listLoading = true
      table_test().then(response => {
        this.list = response
        this.listLoading = false
      })
    }
  }
}
</script>
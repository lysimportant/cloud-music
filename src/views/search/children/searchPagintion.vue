<template>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="num"
    :page-sizes="pagesize"
    :page-size="limit"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total">
  </el-pagination>
</template>

<script>
export default {
  name: 'searchPagintion',
  props: {
    num: Number,
    limit: Number,
    total: Number,
    pageSize: {
      type: Array,
      default () { return [] }
    }
  },
  methods: {
    // 分页页码的改变
    handleSizeChange (val) {
      this.$emit('handleSizeChange', val)
    },
    handleCurrentChange (val) {
      this.$emit('handleCurrentChange', val)
    }
  },
  computed: {
    pagesize () {
      return this.pageSize.length === 0 ? [10, 15, 25, 100] : this.pageSize
    }
  }
}
</script>

<style scoped>

</style>

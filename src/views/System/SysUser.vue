<script lang="tsx">
import { defineComponent, onMounted } from 'vue'
// import { ElButton } from 'element-plus'
import { useTable } from '@/hooks/web/useTable'
import { ContentWrap } from '@/components/ContentWrap'
import { Table } from '@/components/Table'
import { Search } from '@/components/Search'
import { allSchemas } from './SysUserSchema'
import { querySysUser } from '@/api/system'
import type { SysUserDTO } from '@/api/system/types'
// import { DICT_TYPE } from '@/utils/dict'

export default defineComponent({
  setup() {
    const { register, tableObject, methods } = useTable<SysUserDTO>({
      getListApi: querySysUser
    })
    const { getList, setSearchParams } = methods

    // async function handleGetResult(id: number) {
    //   tableObject.loading = true

    //   await querySysUser
    //   getList()
    // }

    onMounted(() => {
      getList()
    })

    return {
      register,
      tableObject,
      setSearchParams
      // handleGetResult
    }
  },
  render() {
    // const tableSlots = {
    //   action: ({ row }) => (
    //     <>
    //       {
    //         <ElButton link type={'primary'} onClick={() => this.handleGetResult(row.id)}>
    //           查询结果
    //         </ElButton>
    //       }
    //     </>
    //   )
    // }

    return (
      <>
        <ContentWrap>
          <Search
            schema={allSchemas.searchSchema}
            onSearch={this.setSearchParams}
            onReset={this.setSearchParams}
          />
        </ContentWrap>
        <ContentWrap>
          <Table
            v-model:page-size={this.tableObject.pageSize}
            v-model:current-page={this.tableObject.currentPage}
            // v-slots={tableSlots}
            columns={allSchemas.tableColumns}
            data={this.tableObject.tableList}
            loading={this.tableObject.loading}
            pagination={{
              total: this.tableObject.total
            }}
            onRegister={this.register}
          ></Table>
        </ContentWrap>
      </>
    )
  }
})
</script>

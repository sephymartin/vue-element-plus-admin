import { reactive } from 'vue'
import { useI18n } from '@/hooks/web/useI18n'
import { DICT_TYPE } from '@/utils/dict'
import { CrudSchema, useCrudSchemas } from '@/hooks/web/useCrudSchemas'
// 国际化
const { t } = useI18n()

// CrudSchema
const crudSchemas = reactive<CrudSchema[]>([
  {
    label: t('common.index'),
    field: 'id',
    type: 'index',
    form: {
      show: false
    },
    detail: {
      show: false
    },
    table: {
      show: false
    }
  },
  {
    label: '用户名',
    field: 'username',
    // minWidth: '140px',
    search: {
      show: true
    }
  },
  {
    label: '昵称',
    field: 'nickname',
    // minWidth: '120px',
    search: {
      show: true
    }
  },
  {
    label: '手机号',
    field: 'mobile',
    // minWidth: '180px',
    search: {
      show: true,
      label: '手机号'
    }
  },
  //   {
  //     label: '业务类型',
  //     field: 'bizType',
  //     dictType: DICT_TYPE.BIZ_TYPE,
  //     search: {
  //       show: true
  //     }
  //   },
  {
    field: 'action',
    // width: '100px',
    label: '操作',
    form: {
      show: false
    },
    detail: {
      show: false
    }
  }
])
export const { allSchemas } = useCrudSchemas(crudSchemas)

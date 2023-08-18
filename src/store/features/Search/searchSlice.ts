import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from 'api/axiosConfig'
import { RootState } from 'store/store'


const initialState: any = {
  query: '',
  result: [],
  loading: true,
  error: null,
  filters: [],
  category: [],
  filters_option: [],
  stateFilterOptions: [],
  categoryIds: [],
  optionloading: true,
}

export const fetchSearchResults = createAsyncThunk('search/fetchSearchResults',  async ({ page }: { page: any }, { getState }) =>   {
  const state = getState() as RootState
  const query = state.search.query 
  const categoryIds = state.search.categoryIds !== null && query === '' ? state.search.categoryIds : [];
  

  const response = await api.post('/v1/products/search', {
    category_filter: categoryIds,
    core_filter: query,
    option_value_filter: {
      option_value_ids: state.search.stateFilterOptions,
      warehouse_ids: [0],
    },
    page: page,
  })

  return response.data
})

export const fetchFilterOptions = createAsyncThunk(
  'search/fetchFilterOptions',
  async ({ category_id, product_filter }: { category_id: string | null; product_filter: string }) => {
    let url = ''
    if (category_id) {
      url = `/v2/categories/filter-options?category_id=${category_id}`
    } else if (product_filter) {
      url = `/v2/categories/filter-options?product_filter=${product_filter}`
    }

    const response = await api.get(url)

    return response.data
  }
)

export const fetchCategoryProduct = createAsyncThunk('search/fetchCategoryProduct', async (id: string) => {
  const response = await api.get(`/v1/categories/${id}/products?page=1`)

  return response.data
})

export const fetchCategoryData = createAsyncThunk('search/fetchCategoryData', async (id: string) => {
  const response = await api.get(`/v1/categories/${id}`)

  return response.data
})

export const fetchFilterOption = createAsyncThunk(
  'search/fetchFilterOption',

  async ({
    option_id,
    category_id,
    product_filter,
  }: {
    option_id: string
    category_id: string | null
    product_filter: string
  }) => {
    if (category_id) {
      const response = await api.get(
        `/v2/categories/filter-options/${option_id}/option-values?category_id=${category_id}`
      )

      return response.data
    } else if (product_filter) {
      const response = await api.get(
        `/v2/categories/filter-options/${option_id}/option-values?product_filter=${product_filter}`
      )

      return response.data
    }
  }
)

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload
    },
    setFilterOptions: (state, action) => {
      state.stateFilterOptions.push(action.payload)
    },
    removeFilterOption: (state, action) => {
      const optionIdToRemove = action.payload
      state.stateFilterOptions = state.stateFilterOptions.filter((id: any) => id !== optionIdToRemove)
    },
    setCategoryId: (state, action) => {
      if(action.payload){
      state.categoryIds[0] = (action.payload)
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.loading = false
        state.result = action.payload

      })
      .addCase(fetchSearchResults.pending, state => {
        state.loading = true
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'будь-ласка спробуйте пізніше'
      })
      .addCase(fetchCategoryProduct.fulfilled, (state, action) => {
   
        state.loading = false
        state.result = action.payload
      })
      .addCase(fetchCategoryProduct.pending, state => {
        state.loading = true
      })
      .addCase(fetchCategoryProduct.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'будь-ласка спробуйте пізніше'
      })
      .addCase(fetchFilterOptions.fulfilled, (state, action) => {
        state.filters = action.payload
        state.loading = false
      })
      .addCase(fetchFilterOptions.pending, state => {
        state.loading = true
      })
      .addCase(fetchFilterOptions.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'будь-ласка спробуйте пізніше'
      })
      .addCase(fetchCategoryData.fulfilled, (state, action) => {
        state.category = action.payload
        state.loading = false
      })
      .addCase(fetchFilterOption.pending, state => {
        state.optionloading = false
      })
      .addCase(fetchFilterOption.fulfilled, (state, action) => {
        state.optionloading = true
        state.filters_option = action.payload
      })
      .addCase(fetchFilterOption.rejected, (state, action) => {
        state.optionloading = false
        state.error = action.error.message || 'err):'
      })
  },
})

export const { setQuery, setFilterOptions, removeFilterOption, setCategoryId } = searchSlice.actions

export { searchSlice }

package com.hamitmizrak.business.dto;


import com.hamitmizrak.annotation.UniqueBlogCategoryValidationName;
import com.hamitmizrak.audit.AuditingAwareBaseDto;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.log4j.Log4j2;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

// LOMBOK
@Data
@AllArgsConstructor
@NoArgsConstructor
@Log4j2
@Builder
// Validation

// CategoryDto(1) - BlogDto(N)
public class BlogCategoryDto extends AuditingAwareBaseDto implements Serializable {

    // SERİLEŞTİRME
    public static final Long serialVersionUID=1L;

    // NOT: ID ayrıca yazdım çünkü relationda sıkıntı olabiliyor.
    // ID
    private Long categoryId;

    // DATE
    @Builder.Default
    private Date systemCreatedDate=new Date(System.currentTimeMillis());

    // CATEGORY NAME
    // kendi Anonotation'ı yazdım.
    @UniqueBlogCategoryValidationName
    @NotEmpty(message = "{blog.category.validation.constraints.NotNull.message}")
    @Size(min=2,message = "{blog.category.least.validation.constraints.NotNull.message}")
    private String categoryName;

    /////////////////////////////////////////////////////////////////////////////////////////
    // COMPOSITION
    // RELATION
    // BlogCategory(1) - Blog(N)
    private List<BlogDto>  blogDtoList;

} //end class
